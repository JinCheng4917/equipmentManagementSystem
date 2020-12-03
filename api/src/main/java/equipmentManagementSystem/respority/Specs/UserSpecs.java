package equipmentManagementSystem.respority.Specs;

import equipmentManagementSystem.entity.User;
import org.springframework.data.jpa.domain.Specification;

public class UserSpecs {
    public static Specification<User> containingName(String name) {
        if (name != null) {
            return (Specification<User>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like(root.get("name").as(String.class), String.format("%%%s%%", name));
        } else {
            return Specification.where(null);
        }
    }
    public static Specification<User> containingUsername(String username) {
        if (username != null) {
            return (Specification<User>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like(root.get("username").as(String.class), String.format("%%%s%%", username));
        } else {
            return Specification.where(null);
        }
    }

    public static Specification<User> containingJobNumber(String jobNumber) {
        if (jobNumber != null) {
            return (Specification<User>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like(root.get("username").as(String.class), String.format("%%%s%%", jobNumber));
        } else {
            return Specification.where(null);
        }
    }

    public static Specification<User> isRole(Long role) {
        if (role == null) {
            return Specification.where(null);
        }
        return (Specification<User>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.equal(root.get("role").as(Long.class),  role);
    }

    public static Specification<User> isNotAdmin(Long role) {
        if (role == null) {
            return Specification.where(null);
        }
        return (Specification<User>) (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.notEqual(root.get("role").as(Long.class),  role);
    }

}