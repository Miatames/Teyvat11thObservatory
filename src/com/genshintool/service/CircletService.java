package com.genshintool.service;

import com.genshintool.dao.CircletDao;
import com.genshintool.pojo.CircletPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CircletService {
    @Autowired
    CircletDao circletDao;

    public void doCircletSubmit(CircletPojo circletPojo) {
        circletDao.doCircletSubmitDao(circletPojo);
    }
}

