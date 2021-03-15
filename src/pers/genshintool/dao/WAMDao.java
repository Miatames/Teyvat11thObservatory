package pers.genshintool.dao;

import pers.genshintool.pojo.WAMPojo;
import pers.genshintool.pojo.WAMSumPojo;

import java.util.List;

public interface WAMDao {

    void doWAMSubmitDao(WAMPojo wamPojo);

    List<WAMSumPojo> doGetWAMSumListDao(Integer wamL);
}
