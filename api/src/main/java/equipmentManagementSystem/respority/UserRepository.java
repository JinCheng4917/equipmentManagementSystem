package equipmentManagementSystem.respority;

import equipmentManagementSystem.entity.User;
import equipmentManagementSystem.respority.Specs.UserSpecs;
import org.apache.poi.ss.formula.functions.T;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.util.Assert;

import javax.transaction.Transactional;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>, PagingAndSortingRepository<User, Long>, JpaSpecificationExecutor {
    long count();

    /**
     * 根据用户名查询用户
     */
    @Transactional
    User findByUsername(String username);

    @Transactional
    Optional<User> findById(Long id);

    @Transactional
    default boolean existsById(Long id) {
        return this.findById(id).isPresent();
    }

    default Page getAll(String name, String username, String jobNumber, Long role, Long id, @NotNull Pageable pageable) {
        Assert.notNull(pageable, "传入的Pageable不能为null");
        Specification<User> specification = UserSpecs.containingName(name).and(UserSpecs.containingUsername(username))
                .and(UserSpecs.containingJobNumber(jobNumber)).and(UserSpecs.isRole(role)).and(UserSpecs.isNotCurrentUser(id));
      return this.findAll(specification, pageable);
    }

}
