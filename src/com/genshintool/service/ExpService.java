package com.genshintool.service;

import com.genshintool.dao.ExpDao;
import com.genshintool.pojo.ExpPojo;
import com.genshintool.pojo.ExpSumPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpService {
    @Autowired
    ExpDao expDao;

    public void doExpSubmit(ExpPojo expPojo) {
        expDao.doExpSubmitDao(expPojo);
    }

    public List<ExpSumPojo> doGetExpSumList(Integer botL) {
        return expDao.doGetExpSumListDao(botL);
    }
}

