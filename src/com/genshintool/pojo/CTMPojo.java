package com.genshintool.pojo;

public class CTMPojo {
    private int sumCTM;
    private int ctmL;
    private int ctmA;
    private int ctmB;
    private int ctmC;
    private String timeCTM;

    public int getSumCTM() {
        return sumCTM;
    }

    public void setSumCTM(int sumCTM) {
        this.sumCTM = sumCTM;
    }

    public int getCtmL() {
        return ctmL;
    }

    public void setCtmL(int ctmL) {
        this.ctmL = ctmL;
    }

    public int getCtmA() {
        return ctmA;
    }

    public void setCtmA(int ctmA) {
        this.ctmA = ctmA;
    }

    public int getCtmB() {
        return ctmB;
    }

    public void setCtmB(int ctmB) {
        this.ctmB = ctmB;
    }

    public int getCtmC() {
        return ctmC;
    }

    public void setCtmC(int ctmC) {
        this.ctmC = ctmC;
    }

    public String getTimeCTM() {
        return timeCTM;
    }

    public void setTimeCTM(String timeCTM) {
        this.timeCTM = timeCTM;
    }

    public CTMPojo(int sumCTM, int ctmL, int ctmA, int ctmB, int ctmC, String timeCTM) {
        this.sumCTM = sumCTM;
        this.ctmL = ctmL;
        this.ctmA = ctmA;
        this.ctmB = ctmB;
        this.ctmC = ctmC;
        this.timeCTM = timeCTM;
    }

    public CTMPojo() {
    }

    @Override
    public String toString() {
        return "CTMPojo{" +
                "sumCTM=" + sumCTM +
                ", ctmL=" + ctmL +
                ", ctmA=" + ctmA +
                ", ctmB=" + ctmB +
                ", ctmC=" + ctmC +
                ", timeCTM='" + timeCTM + '\'' +
                '}';
    }
}
