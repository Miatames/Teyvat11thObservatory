package com.genshintool.service;


import com.genshintool.dao.ExpDao;
import com.genshintool.pojo.ExpPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExpService {
    @Autowired
    ExpDao expDao;

    public void doExpSubmit(ExpPojo expPojo) {
        expDao.doExpSubmitDao(expPojo);
    }
}

