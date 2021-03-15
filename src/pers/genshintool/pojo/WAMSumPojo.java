package pers.genshintool.pojo;

public class WAMSumPojo {
    private int sumWAMSum;
    private int wamASum;
    private int wamBSum;
    private int wamCSum;
    private int wamDSum;

    public int getSumWAMSum() {
        return sumWAMSum;
    }

    public void setSumWAMSum(int sumWAMSum) {
        this.sumWAMSum = sumWAMSum;
    }

    public int getWamASum() {
        return wamASum;
    }

    public void setWamASum(int wamASum) {
        this.wamASum = wamASum;
    }

    public int getWamBSum() {
        return wamBSum;
    }

    public void setWamBSum(int wamBSum) {
        this.wamBSum = wamBSum;
    }

    public int getWamCSum() {
        return wamCSum;
    }

    public void setWamCSum(int wamCSum) {
        this.wamCSum = wamCSum;
    }

    public int getWamDSum() {
        return wamDSum;
    }

    public void setWamDSum(int wamDSum) {
        this.wamDSum = wamDSum;
    }

    public WAMSumPojo(int sumWAMSum, int wamASum, int wamBSum, int wamCSum, int wamDSum) {
        this.sumWAMSum = sumWAMSum;
        this.wamASum = wamASum;
        this.wamBSum = wamBSum;
        this.wamCSum = wamCSum;
        this.wamDSum = wamDSum;
    }

    public WAMSumPojo() {
    }

    @Override
    public String toString() {
        return "WAMSumPojo{" +
                "sumWAMSum=" + sumWAMSum +
                ", wamASum=" + wamASum +
                ", wamBSum=" + wamBSum +
                ", wamCSum=" + wamCSum +
                ", wamDSum=" + wamDSum +
                '}';
    }
}
