package com.genshintool.service;

import com.genshintool.dao.MaterialDao;
import com.genshintool.pojo.MaterialPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterialService {
    @Autowired
    MaterialDao materialDao;

    public List<MaterialPojo> getMaterialTodayList(Integer materialDay) {
        return materialDao.getMaterialTodayListDao(materialDay);
    }
}
