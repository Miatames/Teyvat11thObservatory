package com.genshintool.service;

import com.genshintool.dao.CTMDao;
import com.genshintool.pojo.CTMPojo;
import com.genshintool.pojo.CTMSumPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CTMService {
    @Autowired
    CTMDao ctmDao;

    public void doCTMSubmit(CTMPojo ctmPojo) {
        ctmDao.doCTMSubmitDao(ctmPojo);
    }

    public List<CTMSumPojo> doGetCTMSumList(Integer ctmL) {
        return ctmDao.doGetCTMSumListDao(ctmL);
    }
}

