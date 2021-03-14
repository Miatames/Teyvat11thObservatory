package pers.genshintool.service;

import pers.genshintool.dao.ArtifactsDao;
import pers.genshintool.pojo.ArtifactsPojo;
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

