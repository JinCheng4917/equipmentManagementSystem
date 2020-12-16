package equipmentManagementSystem.service;

import com.mengyunzhi.core.service.CommonService;
import equipmentManagementSystem.entity.Equipment;
import equipmentManagementSystem.entity.Type;
import equipmentManagementSystem.respority.EquipmentRepository;
import equipmentManagementSystem.respority.TypeRepository;
import org.omg.Messaging.SYNC_WITH_TRANSPORT;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class EquipmentServiceImpl implements EquipmentService{
    private EquipmentRepository equipmentRepository;
    private DingService dingService;
    private UserService userService;
    private TypeRepository typeRepository;
    private Type type;

    public EquipmentServiceImpl(EquipmentRepository equipmentRepository,
                                UserService userService,
                                TypeRepository typeRepository,
                                DingService dingService){
        this.equipmentRepository = equipmentRepository;
        this.dingService = dingService;
        this.typeRepository = typeRepository;
        this.userService = userService;
    }
    @Override
    public Page<Equipment> findAll(Pageable pageable) {
        return this.equipmentRepository.findAll(pageable);
    }

    @Override
    public Page<Equipment> getToRepair(Pageable pageable) {
        return this.equipmentRepository.getToRepair(pageable);
    }

    @Override
    public Equipment getEquipmentById(Long id) {
        return this.equipmentRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("找不到相关设备"));
    }

    @Override
    public Page<Equipment> quaryAll(String name, Long states, String place, String internalNumber, Pageable pageable, Long typeId) {
        if (typeId != null){
            this.type = new Type();
            Type type1 = this.typeRepository.findById(typeId).get();
            this.type.setId(type1.getId());
        }else {
            this.type = null;
        }
        return this.equipmentRepository.query(name,states, place, internalNumber, pageable, this.type);
    }

    @Override
    public Equipment update(Long id, Equipment equipment) {
        Equipment oldEquipment= this.getEquipmentById(id);
       oldEquipment.setDepartment(equipment.getDepartment());
       oldEquipment.setInternalNumber(equipment.getInternalNumber());
       oldEquipment.setModel(equipment.getModel());
       oldEquipment.setName(equipment.getName());
       oldEquipment.setPlace(equipment.getPlace());
       oldEquipment.setType(equipment.getType());
        return this.equipmentRepository.save(oldEquipment);
    }

    @Override
    public void add(Equipment equipment) {
        dingService.dingRequest("新增推送" + "\n" + "用户  " +
                this.userService.getCurrentLoginUser().getName() + "   新增" + "\n" + "新增设备： " + equipment.getName());
        equipment.setStates(0);
        this.equipmentRepository.save(equipment);
    }

    @Override
    public void delete(Long id) {
        Equipment equipment = this.equipmentRepository.findById(id).get();
        dingService.dingRequest("删除推送" + "\n" +
                "用户  " + this.userService.getCurrentLoginUser().getName() + "   删除" + "\n" + "删除设备： " + equipment.getName());
        this.equipmentRepository.deleteById(id);
    }

    @Override
    public Equipment report(Long id, Equipment equipment) {
        Equipment equipment1 = this.equipmentRepository.findById(id).get();

        dingService.dingRequest("报修推送" + "\n" +"用户  "
                + this.userService.getCurrentLoginUser().getName() + "   报修" +"\n" + "报修设备： " + equipment1.getName());
        equipment1.setStates(2);
        return this.equipmentRepository.save(equipment1);
    }

    @Override
    public Equipment repair(Long id, Equipment equipment) {
        Equipment equipment1 = this.equipmentRepository.findById(id).get();
        dingService.dingRequest("维修推送" + "\n" +"用户  "
                + this.userService.getCurrentLoginUser().getName() + "   维修" +"\n" + "维修设备： " + equipment1.getName());
        equipment1.setStates(0);
        return this.equipmentRepository.save(equipment1);
    }

    @Override
    public Equipment scrap(Long id, Equipment equipment) {
        Equipment equipment1 = this.equipmentRepository.findById(id).get();
        dingService.dingRequest("报废推送" + "\n"
                +"报废设备： " + equipment1.getName() + "\n" + "用户  " + this.userService.getCurrentLoginUser().getName() + "  执行操作");
        equipment1.setStates(3);
        return this.equipmentRepository.save(equipment1);
    }
}
