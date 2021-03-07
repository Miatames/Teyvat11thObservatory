package com.genshintool.pojo;

public class CircletPojo {
    private int cRateCirclet;
    private int cDmgCirclet;
    private int atkCirclet;
    private int defCirclet;
    private int hpCirclet;
    private int healCirclet;
    private int emCirclet;
    private String timeCirclet;

    public int getcRateCirclet() {
        return cRateCirclet;
    }

    public void setcRateCirclet(int cRateCirclet) {
        this.cRateCirclet = cRateCirclet;
    }

    public int getcDmgCirclet() {
        return cDmgCirclet;
    }

    public void setcDmgCirclet(int cDmgCirclet) {
        this.cDmgCirclet = cDmgCirclet;
    }

    public int getAtkCirclet() {
        return atkCirclet;
    }

    public void setAtkCirclet(int atkCirclet) {
        this.atkCirclet = atkCirclet;
    }

    public int getDefCirclet() {
        return defCirclet;
    }

    public void setDefCirclet(int defCirclet) {
        this.defCirclet = defCirclet;
    }

    public int getHpCirclet() {
        return hpCirclet;
    }

    public void setHpCirclet(int hpCirclet) {
        this.hpCirclet = hpCirclet;
    }

    public int getHealCirclet() {
        return healCirclet;
    }

    public void setHealCirclet(int healCirclet) {
        this.healCirclet = healCirclet;
    }

    public int getEmCirclet() {
        return emCirclet;
    }

    public void setEmCirclet(int emCirclet) {
        this.emCirclet = emCirclet;
    }

    public String getTimeCirclet() {
        return timeCirclet;
    }

    public void setTimeCirclet(String timeCirclet) {
        this.timeCirclet = timeCirclet;
    }

    public CircletPojo(int cRateCirclet, int cDmgCirclet, int atkCirclet, int defCirclet, int hpCirclet, int healCirclet, int emCirclet, String timeCirclet) {
        this.cRateCirclet = cRateCirclet;
        this.cDmgCirclet = cDmgCirclet;
        this.atkCirclet = atkCirclet;
        this.defCirclet = defCirclet;
        this.hpCirclet = hpCirclet;
        this.healCirclet = healCirclet;
        this.emCirclet = emCirclet;
        this.timeCirclet = timeCirclet;
    }

    public CircletPojo() {
    }

    @Override
    public String toString() {
        return "CircletPojo{" +
                "cRateCirclet=" + cRateCirclet +
                ", cDmgCirclet=" + cDmgCirclet +
                ", atkCirclet=" + atkCirclet +
                ", defCirclet=" + defCirclet +
                ", hpCirclet=" + hpCirclet +
                ", healCirclet=" + healCirclet +
                ", emCirclet=" + emCirclet +
                ", timeCirclet='" + timeCirclet + '\'' +
                '}';
    }
}
