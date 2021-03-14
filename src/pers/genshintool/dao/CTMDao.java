package pers.genshintool.dao;

import pers.genshintool.pojo.CTMPojo;
import pers.genshintool.pojo.CTMSumPojo;

import java.util.List;

public interface CTMDao {

    void doCTMSubmitDao(CTMPojo ctmPojo);

    List<CTMSumPojo> doGetCTMSumListDao(Integer ctmL);
}
