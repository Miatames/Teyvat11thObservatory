package com.genshintool.service;

import com.genshintool.dao.ArtifactsDao;
import com.genshintool.pojo.ArtifactsPojo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArtifactsService {
    @Autowired
    ArtifactsDao artifactsDao;

    public void doArtifactsSubmit(ArtifactsPojo artifactsPojo) {
        artifactsDao.doArtifactsSubmitDao(artifactsPojo);
    }
}

