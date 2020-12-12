package equipmentManagementSystem.entity;

import javax.persistence.*;

@Entity
public class BorrowTable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private String id;


    @OneToOne
    private User user;

    private String startTime;

    private String endTime;

    private String remark;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getStartTime() {
        return startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public String getRemark() {
        return remark;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Id
    public String getId() {
        return id;
    }
}
