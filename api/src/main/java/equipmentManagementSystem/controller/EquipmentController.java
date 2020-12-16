package equipmentManagementSystem.controller;

import com.fasterxml.jackson.annotation.JsonView;
import equipmentManagementSystem.entity.Department;
import equipmentManagementSystem.entity.Equipment;
import equipmentManagementSystem.entity.Type;
import equipmentManagementSystem.entity.User;
import equipmentManagementSystem.service.EquipmentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("equipment")
public class EquipmentController {

    private final EquipmentService equipmentService;

    public EquipmentController(EquipmentService equipmentService) {
        this.equipmentService = equipmentService;
    }

    @GetMapping("getAll")
    @JsonView(Department.UserJsonView.class)
    public Page<Equipment> page(@RequestParam int page, @RequestParam int size) {
        return this.equipmentService.findAll(PageRequest.of(page, size));
    }

    @GetMapping("getToRepair")
    @JsonView(Department.UserJsonView.class)
    public Page<Equipment> getToRepair(@RequestParam int page, @RequestParam int size) {
        return this.equipmentService.getToRepair(PageRequest.of(page, size));
    }


    @PutMapping("{id}")
    @JsonView(Department.UserJsonView.class)
    public Equipment update(@PathVariable Long id, @RequestBody Equipment equipment) {
        return this.equipmentService.update(id, equipment);
    }

    @GetMapping("{id}")
    @JsonView(Department.UserJsonView.class)
    public Equipment getEquipmentById(@PathVariable Long id) {
        return this.equipmentService.getEquipmentById(id);
    }

    @GetMapping("query")
    @JsonView(Department.UserJsonView.class)
    public Page<Equipment> findAll(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String internalNumber,
            @RequestParam(required = false) String  place,
            @RequestParam(required = false) Long states,
            @RequestParam(required = false) Long type,
            Pageable pageable) {
        return this.equipmentService.quaryAll(
                name,
                states,
                place,
                internalNumber,
                pageable,
                type);
    }

    @PostMapping
    public void add(@RequestBody Equipment equipment) {
        this.equipmentService.add(equipment);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        this.equipmentService.delete(id);
    }


    @PutMapping("report/{id}")
    @JsonView(Department.UserJsonView.class)
    public Equipment  report(@PathVariable Long id, @RequestBody Equipment equipment) {
        return this.equipmentService.report(id, equipment);
    }

    @PutMapping("repair/{id}")
    @JsonView(Department.UserJsonView.class)
    public Equipment  repair(@PathVariable Long id, @RequestBody Equipment equipment) {
        return this.equipmentService.repair(id, equipment);
    }

    @PutMapping("scrap/{id}")
    @JsonView(Department.UserJsonView.class)
    public Equipment  scrap(@PathVariable Long id, @RequestBody Equipment equipment) {
        return this.equipmentService.scrap(id, equipment);
    }
}