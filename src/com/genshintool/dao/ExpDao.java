package com.genshintool.dao;

import com.genshintool.pojo.ExpPojo;
import com.genshintool.pojo.ExpSumPojo;

import java.util.List;

public interface ExpDao {

    void doExpSubmitDao(ExpPojo expPojo);

    List<ExpSumPojo> doGetExpSumListDao(Integer botL);
}
