package equipmentManagementSystem.service;

import equipmentManagementSystem.entity.Department;
import equipmentManagementSystem.respority.DepartmentRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService{

    private DepartmentRepository departmentRepository;
    public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }


    @Override
    public Page<Department> findAll(Pageable pageable) {
        return this.departmentRepository.findAll(pageable);
    }

    @Override
    public List<Department> getAll() {
        return (List<Department>) this.departmentRepository.findAll();
    }
}
