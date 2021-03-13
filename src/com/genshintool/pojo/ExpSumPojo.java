package com.genshintool.pojo;

public class ExpSumPojo {
    private int sumBORSum;
    private int expASum;
    private int expBSum;
    private int expCSum;

    public int getSumBORSum() {
        return sumBORSum;
    }

    public void setSumBORSum(int sumBORSum) {
        this.sumBORSum = sumBORSum;
    }

    public int getExpASum() {
        return expASum;
    }

    public void setExpASum(int expASum) {
        this.expASum = expASum;
    }

    public int getExpBSum() {
        return expBSum;
    }

    public void setExpBSum(int expBSum) {
        this.expBSum = expBSum;
    }

    public int getExpCSum() {
        return expCSum;
    }

    public void setExpCSum(int expCSum) {
        this.expCSum = expCSum;
    }

    public ExpSumPojo(int sumBORSum, int expASum, int expBSum, int expCSum) {
        this.sumBORSum = sumBORSum;
        this.expASum = expASum;
        this.expBSum = expBSum;
        this.expCSum = expCSum;
    }

    public ExpSumPojo() {
    }

    @Override
    public String toString() {
        return "ExpSumPojo{" +
                "sumBORSum=" + sumBORSum +
                ", expASum=" + expASum +
                ", expBSum=" + expBSum +
                ", expCSum=" + expCSum +
                '}';
    }
}
