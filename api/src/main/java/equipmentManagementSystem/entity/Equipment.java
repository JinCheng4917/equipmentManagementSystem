package equipmentManagementSystem.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Equipment{

    @Id
    private Long id;

    /**
     * 型号
     */
    private String model;

    /**
     * 设备名称
     */
    private String name;

    /**
     * 种类
     */

    @OneToOne
    private Type type;

    /**
     * 内部编号
     */
    private String internalNumber;

    /**
     * 所属部门
     */
    @OneToOne
    private Department department;

    /**
     * 存放位置
     */
    private String place;

    /**
     * 购入时间
     */
    private Long saleTime;

    /**
     * 状态
     */
    private Integer states;


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Department getDepartment() {
        return department;
    }

    public Long getSaleTime() {
        return saleTime;
    }

    public String getInternalNumber() {
        return internalNumber;
    }

    public String getModel() {
        return model;
    }

    public String getPlace() {
        return place;
    }

    public Type getType() {
        return type;
    }

    public Integer getStates() {
        return states;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public void setInternalNumber(String internalNumber) {
        this.internalNumber = internalNumber;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public void setSaleTime(Long saleTime) {
        this.saleTime = saleTime;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public void setStates(Integer states) {
        this.states = states;
    }
}

