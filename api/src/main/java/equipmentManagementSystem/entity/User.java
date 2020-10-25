package equipmentManagementSystem.entity;


import com.fasterxml.jackson.annotation.JsonView;
import equipmentManagementSystem.service.BeanService;

import javax.persistence.*;
import java.util.Set;

/**
 * 用户
 */

@Entity
public class User{

    @Id
    private Long id;

    /**
     * 工号
     */
    private String jobNumber = "";

    /**
     * 部门
     */
    @OneToOne
    private Department department;

    /**
     * 姓名
     */
    private String name;

    /**
     * 密码
     */
    @Column(nullable = false)
    @JsonView(PasswordJsonView.class)
    private String password;

    /**
     * 角色
     */
    @OneToMany
    @JsonView(RolesJsonView.class)
    private Set<Role> roles;

    /**
     * 性别
     * false: 男
     * true:  女
     */
    private Boolean sex = false;

    /**
     * 用户名
     */
    @Column(nullable = false)
    private String username;

    /**
     * 是否是超级管理员
     */
    private Boolean admin;


    /**
     * 校验密码
     *
     * @param password 密码
     * @return
     */
    public boolean verifyPassword(String password) {
        return BeanService.getPasswordEncoder().matches(password, this.password);
    }

    public Long getId() {
        return id;
    }

    public String getJobNumber() {
        return jobNumber;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public String getName() {
        return name;
    }

    public Boolean getSex() {
        return sex;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setJobNumber(String jobNumber) {
        this.jobNumber = jobNumber;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setSex(Boolean sex) {
        this.sex = sex;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public interface RolesJsonView {
    }

    public interface PasswordJsonView {
    }

}