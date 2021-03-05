package com.genshintool.service;

import com.genshintool.dao.SandsDao;
import com.genshintool.pojo.SandsPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SandsService {
    @Autowired
    SandsDao sandsDao;

    public void doSandsSubmit(SandsPojo sandsPojo) {
        sandsDao.doSandsSubmitDao(sandsPojo);
    }
}

