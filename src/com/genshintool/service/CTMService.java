package com.genshintool.service;

import com.genshintool.dao.CTMDao;
import com.genshintool.pojo.CTMPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CTMService {
    @Autowired
    CTMDao ctmDao;

    public void doCTMSubmit(CTMPojo ctmPojo) {
        ctmDao.doCTMSubmitDao(ctmPojo);
    }
}

