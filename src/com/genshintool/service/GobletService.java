package com.genshintool.service;

import com.genshintool.dao.GobletDao;
import com.genshintool.pojo.GobletPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GobletService {
    @Autowired
    GobletDao gobletDao;

    public void doGobletSubmit(GobletPojo gobletPojo) {
        gobletDao.doGobletSubmitDao(gobletPojo);
    }
}

