package com.genshintool.pojo;

public class ArtifactsPojo {
    private int sumArti;
    private int flower;
    private int plume;
    private int sands;
    private int goblet;
    private int circlet;
    private String timeArti;

    public int getSumArti() {
        return sumArti;
    }

    public void setSumArti(int sumArti) {
        this.sumArti = sumArti;
    }

    public int getFlower() {
        return flower;
    }

    public void setFlower(int flower) {
        this.flower = flower;
    }

    public int getPlume() {
        return plume;
    }

    public void setPlume(int plume) {
        this.plume = plume;
    }

    public int getSands() {
        return sands;
    }

    public void setSands(int sands) {
        this.sands = sands;
    }

    public int getGoblet() {
        return goblet;
    }

    public void setGoblet(int goblet) {
        this.goblet = goblet;
    }

    public int getCirclet() {
        return circlet;
    }

    public void setCirclet(int circlet) {
        this.circlet = circlet;
    }

    public String getTimeArti() {
        return timeArti;
    }

    public void setTimeArti(String timeArti) {
        this.timeArti = timeArti;
    }

    public ArtifactsPojo(int sumArti, int flower, int plume, int sands, int goblet, int circlet, String timeArti) {
        this.sumArti = sumArti;
        this.flower = flower;
        this.plume = plume;
        this.sands = sands;
        this.goblet = goblet;
        this.circlet = circlet;
        this.timeArti = timeArti;
    }

    public ArtifactsPojo() {
    }

    @Override
    public String toString() {
        return "ArtifactsPojo{" +
                "sumArti=" + sumArti +
                ", flower=" + flower +
                ", plume=" + plume +
                ", sands=" + sands +
                ", goblet=" + goblet +
                ", circlet=" + circlet +
                ", timeArti='" + timeArti + '\'' +
                '}';
    }
}
