package com.genshintool.dao;

import com.genshintool.pojo.CTMPojo;
import com.genshintool.pojo.CTMSumPojo;

import java.util.List;

public interface CTMDao {

    void doCTMSubmitDao(CTMPojo ctmPojo);

    List<CTMSumPojo> doGetCTMSumListDao(Integer ctmL);
}
