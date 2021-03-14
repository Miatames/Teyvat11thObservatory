package pers.genshintool.controller;
import pers.genshintool.pojo.MaterialPojo;
import pers.genshintool.pojo.Msg;
import pers.genshintool.service.MaterialService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MaterialController {
    @Autowired
    MaterialService materialService;

    @ResponseBody
    @RequestMapping("/MaterialTodayList/{materialDay}")
    public Msg materialToday(@PathVariable("materialDay") Integer materialDay){
        List<MaterialPojo> materialTodayList = materialService.getMaterialTodayList(materialDay);
        return Msg.success().add("material",materialTodayList);
    }


}
