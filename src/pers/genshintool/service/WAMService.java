package pers.genshintool.service;


import pers.genshintool.dao.WAMDao;
import pers.genshintool.pojo.WAMPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WAMService {
    @Autowired
    WAMDao wamDao;

    public void doWAMSubmit(WAMPojo wamPojo) {
        wamDao.doWAMSubmitDao(wamPojo);
    }
}

