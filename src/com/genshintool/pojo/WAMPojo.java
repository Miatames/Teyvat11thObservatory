package com.genshintool.pojo;

public class WAMPojo {
    private int sumWAM;
    private int wamL;
    private int wamA;
    private int wamB;
    private int wamC;
    private int wamD;
    private String timeWAM;

    public int getSumWAM() {
        return sumWAM;
    }

    public void setSumWAM(int sumWAM) {
        this.sumWAM = sumWAM;
    }

    public int getWamL() {
        return wamL;
    }

    public void setWamL(int wamL) {
        this.wamL = wamL;
    }

    public int getWamA() {
        return wamA;
    }

    public void setWamA(int wamA) {
        this.wamA = wamA;
    }

    public int getWamB() {
        return wamB;
    }

    public void setWamB(int wamB) {
        this.wamB = wamB;
    }

    public int getWamC() {
        return wamC;
    }

    public void setWamC(int wamC) {
        this.wamC = wamC;
    }

    public int getWamD() {
        return wamD;
    }

    public void setWamD(int wamD) {
        this.wamD = wamD;
    }

    public String getTimeWAM() {
        return timeWAM;
    }

    public void setTimeWAM(String timeWAM) {
        this.timeWAM = timeWAM;
    }

    public WAMPojo(int sumWAM, int wamL, int wamA, int wamB, int wamC, int wamD, String timeWAM) {
        this.sumWAM = sumWAM;
        this.wamL = wamL;
        this.wamA = wamA;
        this.wamB = wamB;
        this.wamC = wamC;
        this.wamD = wamD;
        this.timeWAM = timeWAM;
    }

    public WAMPojo() {
    }

    @Override
    public String toString() {
        return "WAMPojo{" +
                "sumWAM=" + sumWAM +
                ", wamL=" + wamL +
                ", wamA=" + wamA +
                ", wamB=" + wamB +
                ", wamC=" + wamC +
                ", wamD=" + wamD +
                ", timeWAM='" + timeWAM + '\'' +
                '}';
    }
}
