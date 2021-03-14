package pers.genshintool.pojo;

public class BossPojo {
    private int sumCAM;
    private int camL;
    private int camU;
    private int camA;
    private int camB;
    private int camC;
    private int camD;
    private String timeCAM;

    public int getSumCAM() {
        return sumCAM;
    }

    public void setSumCAM(int sumCAM) {
        this.sumCAM = sumCAM;
    }

    public int getCamL() {
        return camL;
    }

    public void setCamL(int camL) {
        this.camL = camL;
    }

    public int getCamU() {
        return camU;
    }

    public void setCamU(int camU) {
        this.camU = camU;
    }

    public int getCamA() {
        return camA;
    }

    public void setCamA(int camA) {
        this.camA = camA;
    }

    public int getCamB() {
        return camB;
    }

    public void setCamB(int camB) {
        this.camB = camB;
    }

    public int getCamC() {
        return camC;
    }

    public void setCamC(int camC) {
        this.camC = camC;
    }

    public int getCamD() {
        return camD;
    }

    public void setCamD(int camD) {
        this.camD = camD;
    }

    public String getTimeCAM() {
        return timeCAM;
    }

    public void setTimeCAM(String timeCAM) {
        this.timeCAM = timeCAM;
    }

    public BossPojo(int sumCAM, int camL, int camU, int camA, int camB, int camC, int camD, String timeCAM) {
        this.sumCAM = sumCAM;
        this.camL = camL;
        this.camU = camU;
        this.camA = camA;
        this.camB = camB;
        this.camC = camC;
        this.camD = camD;
        this.timeCAM = timeCAM;
    }

    public BossPojo() {
    }

    @Override
    public String toString() {
        return "BossPojo{" +
                "sumCAM=" + sumCAM +
                ", camL=" + camL +
                ", camU=" + camU +
                ", camA=" + camA +
                ", camB=" + camB +
                ", camC=" + camC +
                ", camD=" + camD +
                ", timeCAM='" + timeCAM + '\'' +
                '}';
    }
}
