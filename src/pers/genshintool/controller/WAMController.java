package pers.genshintool.controller;

import org.springframework.web.bind.annotation.PathVariable;
import pers.genshintool.pojo.Msg;
import pers.genshintool.pojo.WAMPojo;
import pers.genshintool.pojo.WAMSumPojo;
import pers.genshintool.service.WAMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class WAMController {
    @Autowired
    WAMService wamService;

    @ResponseBody
    @RequestMapping(value = "/wamSubmit",method = RequestMethod.POST)
    public Msg wamSubmit(WAMPojo wamPojo){
        wamService.doWAMSubmit(wamPojo);
        return Msg.success();
    }

    @ResponseBody
    @RequestMapping("/wamSumList/{wamL}")
    public Msg wamSumList(@PathVariable("wamL") Integer wamL) {
        List<WAMSumPojo> getWAMSumList = wamService.doGetWAMSumList(wamL);
        return  Msg.success().add("wam", getWAMSumList);
    }

}
