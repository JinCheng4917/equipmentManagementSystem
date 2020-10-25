package equipmentManagementSystem.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Type{

    @Id
    private Long id;
    /**
     * 设备类型名称
     */
    private String name;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
