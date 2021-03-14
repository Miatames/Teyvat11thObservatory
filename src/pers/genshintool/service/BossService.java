package pers.genshintool.service;

import pers.genshintool.dao.BossDao;
import pers.genshintool.pojo.BossPojo;
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

