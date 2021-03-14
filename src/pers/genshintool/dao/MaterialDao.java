package pers.genshintool.dao;

import pers.genshintool.pojo.MaterialPojo;

import java.util.List;

public interface MaterialDao {
    List<MaterialPojo> getMaterialTodayListDao(Integer materialDay);
}
