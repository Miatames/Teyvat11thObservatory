package com.genshintool.dao;

import com.genshintool.pojo.MaterialPojo;

import java.util.List;

public interface MaterialDao {
    List<MaterialPojo> getMaterialTodayListDao(Integer materialDay);
}
