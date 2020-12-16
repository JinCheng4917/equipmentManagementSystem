package equipmentManagementSystem.service;

import equipmentManagementSystem.entity.Department;
import equipmentManagementSystem.entity.Equipment;
import equipmentManagementSystem.entity.Type;
import equipmentManagementSystem.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public interface EquipmentService {
    Page<Equipment> findAll(Pageable pageable);

    Page<Equipment> getToRepair(Pageable pageable);

    void add(Equipment equipment);

    /**
     * 删除
     *
     * @param id
     */
    void delete(Long id);

    Equipment report(Long id, Equipment equipment);

    Equipment repair(Long id, Equipment equipment);


    Equipment scrap(Long id, Equipment equipment);

    Equipment update(Long id, Equipment equipment);

    Equipment getEquipmentById(Long id);

    Page<Equipment> quaryAll(String name, Long states, String place, String internalNumber, Pageable pageable, Long type);

    Equipment borrow(Long id, Equipment equipment);

    Equipment toReturn(Long id, Equipment equipment);

    Page<Equipment> getBorrow(Pageable pageable);
}
