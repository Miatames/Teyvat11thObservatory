package com.genshintool.controller;

import com.genshintool.pojo.ArtifactsPojo;
import com.genshintool.pojo.Msg;
import com.genshintool.service.ArtifactsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ArtifactsController {
    @Autowired
    ArtifactsService artifactsService;

    @ResponseBody
    @RequestMapping(value = "/artifactsSubmit",method = RequestMethod.POST)
    public Msg artifactsSubmit(ArtifactsPojo artifactsPojo){
        artifactsService.doArtifactsSubmit(artifactsPojo);
        return Msg.success();
    }


}
