package equipmentManagementSystem.respority.Specs;

import equipmentManagementSystem.entity.Equipment;
import org.springframework.data.jpa.domain.Specification;

public class EquipmentSpecs {

    public static Specification<Equipment> isStatus(Long status) {
        if (status == null) {
            return Specification.where(null);
        }
        return (Specification<Equipment>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.equal(root.get("states").as(Long.class),  status);
    }
}
