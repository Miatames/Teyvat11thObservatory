package com.genshintool.service;

import com.genshintool.dao.BossDao;
import com.genshintool.pojo.BossPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BossService {
    @Autowired
    BossDao bossDao;

    public void doBossSubmit(BossPojo bossPojo) {
        bossDao.doBossSubmitDao(bossPojo);
    }
}

