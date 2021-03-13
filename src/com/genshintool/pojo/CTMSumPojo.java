package com.genshintool.pojo;

public class CTMSumPojo {
    private int sumCTMSum;
    private int ctmASum;
    private int ctmBSum;
    private int ctmCSum;

    public int getSumCTMSum() {
        return sumCTMSum;
    }

    public void setSumCTMSum(int sumCTMSum) {
        this.sumCTMSum = sumCTMSum;
    }

    public int getCtmASum() {
        return ctmASum;
    }

    public void setCtmASum(int ctmASum) {
        this.ctmASum = ctmASum;
    }

    public int getCtmBSum() {
        return ctmBSum;
    }

    public void setCtmBSum(int ctmBSum) {
        this.ctmBSum = ctmBSum;
    }

    public int getCtmCSum() {
        return ctmCSum;
    }

    public void setCtmCSum(int ctmCSum) {
        this.ctmCSum = ctmCSum;
    }

    public CTMSumPojo(int sumCTMSum, int ctmASum, int ctmBSum, int ctmCSum) {
        this.sumCTMSum = sumCTMSum;
        this.ctmASum = ctmASum;
        this.ctmBSum = ctmBSum;
        this.ctmCSum = ctmCSum;
    }

    public CTMSumPojo() {
    }

    @Override
    public String toString() {
        return "CTMSumPojo{" +
                "sumCTMSum=" + sumCTMSum +
                ", ctmASum=" + ctmASum +
                ", ctmBSum=" + ctmBSum +
                ", ctmCSum=" + ctmCSum +
                '}';
    }
}
