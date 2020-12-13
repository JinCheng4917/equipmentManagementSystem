package equipmentManagementSystem.respority;

import equipmentManagementSystem.entity.Equipment;
import equipmentManagementSystem.entity.User;
import equipmentManagementSystem.respority.Specs.EquipmentSpecs;
import equipmentManagementSystem.respority.Specs.UserSpecs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.util.Assert;

public interface EquipmentRepository extends JpaRepository<Equipment, Long>, PagingAndSortingRepository<Equipment, Long>, JpaSpecificationExecutor {
    default Page<Equipment> getToRepair(Pageable pageable){
        Assert.notNull(pageable, "传入的Pageable不能为null");
        Specification<Equipment> specification = EquipmentSpecs.isStatus(2L);
        return this.findAll(specification, pageable);
    };
}
