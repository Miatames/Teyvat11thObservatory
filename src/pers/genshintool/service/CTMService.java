package pers.genshintool.service;

import pers.genshintool.dao.CTMDao;
import pers.genshintool.pojo.CTMPojo;
import pers.genshintool.pojo.CTMSumPojo;
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

