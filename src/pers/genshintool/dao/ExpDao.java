package pers.genshintool.dao;

import pers.genshintool.pojo.ExpPojo;
import pers.genshintool.pojo.ExpSumPojo;

import java.util.List;

public interface ExpDao {

    void doExpSubmitDao(ExpPojo expPojo);

    List<ExpSumPojo> doGetExpSumListDao(Integer botL);
}
