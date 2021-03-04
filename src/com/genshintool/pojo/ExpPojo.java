package com.genshintool.pojo;

public class ExpPojo {
    private int sumBOR;
    private int expA;
    private int expB;
    private int expC;
    private int worldL;
    private String timeBOR;

    public int getSumBOR() {
        return sumBOR;
    }

    public void setSumBOR(int sumBOR) {
        this.sumBOR = sumBOR;
    }

    public int getExpA() {
        return expA;
    }

    public void setExpA(int expA) {
        this.expA = expA;
    }

    public int getExpB() {
        return expB;
    }

    public void setExpB(int expB) {
        this.expB = expB;
    }

    public int getExpC() {
        return expC;
    }

    public void setExpC(int expC) {
        this.expC = expC;
    }

    public int getWorldL() {
        return worldL;
    }

    public void setWorldL(int worldL) {
        this.worldL = worldL;
    }

    public String getTimeBOR() {
        return timeBOR;
    }

    public void setTimeBOR(String timeBOR) {
        this.timeBOR = timeBOR;
    }

    public ExpPojo(int sumBOR, int expA, int expB, int expC, int worldL, String timeBOR) {
        this.sumBOR = sumBOR;
        this.expA = expA;
        this.expB = expB;
        this.expC = expC;
        this.worldL = worldL;
        this.timeBOR = timeBOR;
    }

    public ExpPojo() {
    }

    @Override
    public String toString() {
        return "ExpPojo{" +
                "sumBOR=" + sumBOR +
                ", expA=" + expA +
                ", expB=" + expB +
                ", expC=" + expC +
                ", worldL=" + worldL +
                ", timeBOR='" + timeBOR + '\'' +
                '}';
    }
}
