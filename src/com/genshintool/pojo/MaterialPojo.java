package com.genshintool.pojo;

public class MaterialPojo {
    private String materialName;
    private String materialDay;
    private String fileName;

    public String getMaterialName() {
        return materialName;
    }

    public void setMaterialName(String materialName) {
        this.materialName = materialName;
    }

    public String getMaterialDay() {
        return materialDay;
    }

    public void setMaterialDay(String materialDay) {
        this.materialDay = materialDay;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public MaterialPojo(String materialName, String materialDay, String fileName) {
        super();
        this.materialName = materialName;
        this.materialDay = materialDay;
        this.fileName = fileName;
    }

    public MaterialPojo() {
        super();
    }

    @Override
    public String toString() {
        return "MaterialPojo{" +
                "materialName='" + materialName + '\'' +
                ", materialDay='" + materialDay + '\'' +
                ", fileName='" + fileName + '\'' +
                '}';
    }
}
