package com.genshintool.pojo;

public class GobletPojo {
    private int elemGoblet;
    private int physGoblet;
    private int atkGoblet;
    private int defGoblet;
    private int hpGoblet;
    private int emGoblet;
    private String timeGoblet;

    public int getElemGoblet() {
        return elemGoblet;
    }

    public void setElemGoblet(int elemGoblet) {
        this.elemGoblet = elemGoblet;
    }

    public int getPhysGoblet() {
        return physGoblet;
    }

    public void setPhysGoblet(int physGoblet) {
        this.physGoblet = physGoblet;
    }

    public int getAtkGoblet() {
        return atkGoblet;
    }

    public void setAtkGoblet(int atkGoblet) {
        this.atkGoblet = atkGoblet;
    }

    public int getDefGoblet() {
        return defGoblet;
    }

    public void setDefGoblet(int defGoblet) {
        this.defGoblet = defGoblet;
    }

    public int getHpGoblet() {
        return hpGoblet;
    }

    public void setHpGoblet(int hpGoblet) {
        this.hpGoblet = hpGoblet;
    }

    public int getEmGoblet() {
        return emGoblet;
    }

    public void setEmGoblet(int emGoblet) {
        this.emGoblet = emGoblet;
    }

    public String getTimeGoblet() {
        return timeGoblet;
    }

    public void setTimeGoblet(String timeGoblet) {
        this.timeGoblet = timeGoblet;
    }

    public GobletPojo(int elemGoblet, int physGoblet, int atkGoblet, int defGoblet, int hpGoblet, int emGoblet, String timeGoblet) {
        this.elemGoblet = elemGoblet;
        this.physGoblet = physGoblet;
        this.atkGoblet = atkGoblet;
        this.defGoblet = defGoblet;
        this.hpGoblet = hpGoblet;
        this.emGoblet = emGoblet;
        this.timeGoblet = timeGoblet;
    }

    public GobletPojo() {
    }

    @Override
    public String toString() {
        return "GobletPojo{" +
                "elemGoblet=" + elemGoblet +
                ", physGoblet=" + physGoblet +
                ", atkGoblet=" + atkGoblet +
                ", defGoblet=" + defGoblet +
                ", hpGoblet=" + hpGoblet +
                ", emGoblet=" + emGoblet +
                ", timeGoblet='" + timeGoblet + '\'' +
                '}';
    }
}
