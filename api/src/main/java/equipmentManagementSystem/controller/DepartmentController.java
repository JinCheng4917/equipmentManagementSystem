package equipmentManagementSystem.controller;

import equipmentManagementSystem.entity.Department;
import equipmentManagementSystem.entity.User;
import equipmentManagementSystem.service.DepartmentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("department")
public class DepartmentController {

    private static final Logger logger = LoggerFactory.getLogger(DepartmentController.class);

    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @GetMapping("getAll")
    public Page<Department> page(@RequestParam int page, @RequestParam int size) {
        return this.departmentService.findAll(PageRequest.of(page, size));
    }

    @GetMapping
    public List<Department> getAll() {
        return this.departmentService.getAll();
    }
}
