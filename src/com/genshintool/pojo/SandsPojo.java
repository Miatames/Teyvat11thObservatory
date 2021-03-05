package com.genshintool.pojo;

public class SandsPojo {
    private int emSands;
    private int erSands;
    private int atkSands;
    private int defSands;
    private int hpSands;
    private String timeSands;

    public int getEmSands() {
        return emSands;
    }

    public void setEmSands(int emSands) {
        this.emSands = emSands;
    }

    public int getErSands() {
        return erSands;
    }

    public void setErSands(int erSands) {
        this.erSands = erSands;
    }

    public int getAtkSands() {
        return atkSands;
    }

    public void setAtkSands(int atkSands) {
        this.atkSands = atkSands;
    }

    public int getDefSands() {
        return defSands;
    }

    public void setDefSands(int defSands) {
        this.defSands = defSands;
    }

    public int getHpSands() {
        return hpSands;
    }

    public void setHpSands(int hpSands) {
        this.hpSands = hpSands;
    }

    public String getTimeSands() {
        return timeSands;
    }

    public void setTimeSands(String timeSands) {
        this.timeSands = timeSands;
    }

    public SandsPojo(int emSands, int erSands, int atkSands, int defSands, int hpSands, String timeSands) {
        this.emSands = emSands;
        this.erSands = erSands;
        this.atkSands = atkSands;
        this.defSands = defSands;
        this.hpSands = hpSands;
        this.timeSands = timeSands;
    }

    public SandsPojo() {
    }

    @Override
    public String toString() {
        return "SandsPojo{" +
                "emSands=" + emSands +
                ", erSands=" + erSands +
                ", atkSands=" + atkSands +
                ", defSands=" + defSands +
                ", hpSands=" + hpSands +
                ", timeSands='" + timeSands + '\'' +
                '}';
    }
}
