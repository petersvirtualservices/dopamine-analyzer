bmi: {
            type: String,
        },
        totalBodyWater: {
            type: String,
        },
        dryLeanMass: {
            type: String,
        },
        bodyFatMass: {
            type: String,
        },
        skeletalMuscleMass: {
            type: String,
        },
        percentBodyMass: {
            type: String,
        },
        slaLeftArmLb: {
            type: String,
        },
        slaRightArmLb: {
            type: String,
        },
        slaLeftLegLb: {
            type: String,
        },
        slaRightLegLb: {
            type: String,
        },
        slaTrunkLb: {
            type: String,
        },
        slaLeftArmPercent: {
            type: String,
        },
        slaRightArmPercent: {
            type: String,
        },
        slaLeftLegPercent: {
            type: String,
        },
        slaRightLegPercent: {
            type: String,
        },
        slaTrunkPercent: {
            type: String,
        },
        leanBodyMass: {
            type: String,
        },
        bodyFatMass: {
            type: String,
        },
        impedanceLeftArmTwenty: {
            type: String,
        },
        impedanceRightArmTwenty: {
            type: String,
        },
        impedanceLeftLegTwenty: {
            type: String,
        },
        impedanceRightLegTwenty: {
            type: String,
        },
        impedanceTrunkTwenty: {
            type: String,
        },
        impedanceLeftArmHundred: {
            type: String,
        },
        impedanceRightArmHundred: {
            type: String,
        },
        impedanceLeftLegHundred: {
            type: String,
        },
        impedanceRightLegHundred: {
            type: String,
        },
        impedanceTrunkHundred: {
            type: String,
        },



        bmi: req.body.bmi,
    totalBodyWater: req.body.totalBodyWater,
    dryLeanMass: req.body.dryLeanMass,
    bodyFatMass: req.body.bodyFatMass,
    skeletalMuscleMass: req.body.skeletalMuscleMass,
    percentBodyMass: req.body.percentBodyMass,
    slaLeftArmLb: req.body.slaLeftArmLb,
    slaRightArmLb: req.body.slaRightArmLb,
    slaLeftLegLb: req.body.slaLeftLegLb,
    slaRightLegLb: req.body.slaRightLegLb,
    slaTrunkLb: req.body.slaTrunkLb,
    slaLeftArmPercent: req.body.slaLeftArmPercent,
    slaRightArmPercent: req.body.slaRightArmPercent,
    slaLeftLegPercent: req.body.slaLeftLegPercent,
    slaRightLegPercent: req.body.slaRightLegPercent,
    slaTrunkPercent: req.body.slaTrunkPercent,
    leanBodyMass: req.body.leanBodyMass,
    bodyFatMass: req.body.bodyFatMass,
    impedanceLeftArmTwenty: req.body.impedanceLeftArmTwenty,
    impedanceRightArmTwenty: req.body.impedanceRightArmTwenty,
    impedanceLeftLegTwenty: req.body.impedanceLeftLegTwenty,
    impedanceRightLegTwenty: req.body.impedanceRightLegTwenty,
    impedanceTrunkTwenty: req.body.impedanceTrunkTwenty,
    impedanceLeftArmHundred: req.body.impedanceLeftArmHundred,
    impedanceRightArmHundred: req.body.impedanceRightArmHundred,
    impedanceLeftLegHundred: req.body.impedanceLeftLegHundred,
    impedanceRightLegHundred: req.body.impedanceRightLegHundred,
    impedanceTrunkHundred: req.body.impedanceTrunkHundred,

<label for="bmi">BMI</label>
    <input type="text" id="bmi" value="<%= measurement.bmi %>" name="bmi" class="form-control" />
    <br />
    <label for="totalBodyWater">Total Body Water</label>
    <input type="text" id="totalBodyWater" value="<%= measurement.totalBodyWater %>" name="totalBodyWater" class="form-control" />
    <br />
    <label for="dryLeanMass">Dry Lean Mass</label>
    <input type="text" id="dryLeanMass" value="<%= measurement.dryLeanMass %>" name="dryLeanMass" class="form-control" />
    <br />
    <label for="bodyFatMass">Body Fat Mass</label>
    <input type="text" id="bodyFatMass" value="<%= measurement.bodyFatMass %>" name="bodyFatMass" class="form-control" />
    <br />
    <label for="skeletalMuscleMass">Skeletal Muscle Mass</label>
    <input type="text" id="skeletalMuscleMass" value="<%= measurement.skeletalMuscleMass %>" name="skeletalMuscleMass" class="form-control" />
    <br />
    <label for="percentBodyMass">Percent Body Mass</label>
    <input type="text" id="percentBodyMass" value="<%= measurement.percentBodyMass %>" name="percentBodyMass" class="form-control" />
    <br />
    <label for="slaLeftArmLb">Left Arm SLA LB</label>
    <input type="text" id="slaLeftArmLb" value="<%= measurement.slaLeftArmLb %>" name="slaLeftArmLb" class="form-control" />
    <br />
    <label for="slaRightArmLb">Right Arm SLA LB</label>
    <input type="text" id="slaRightArmLb" value="<%= measurement.slaRightArmLb %>" name="slaRightArmLb" class="form-control" />
    <br />
    <label for="slaLeftLegLb">Right Leg SLA LB</label>
    <input type="text" id="slaLeftLegLb" value="<%= measurement.slaLeftLegLb %>" name="slaLeftLegLb" class="form-control" />
    <br />
    <label for="slaRightLegLb">Right Leg SLA LB</label>
    <input type="text" id="slaRightLegLb" value="<%= measurement.slaRightLegLb %>" name="slaRightLegLb" class="form-control" />
    <br />
    <label for="slaTrunkLb">Trunk SLA LB</label>
    <input type="text" id="slaTrunkLb" value="<%= measurement.slaTrunkLb %>" name="slaTrunkLb" class="form-control" />
    <br />
    <label for="slaLeftArmPercent">Left Arm SLA Percent</label>
    <input type="text" id="slaLeftArmPercent" value="<%= measurement.slaLeftArmPercent %>" name="slaLeftArmPercent" class="form-control" />
    <br />
    <label for="slaRightArmPercent">Right Arm SLA Percent</label>
    <input type="text" id="slaRightArmPercent" value="<%= measurement.slaRightArmPercent %>" name="slaRightArmPercent" class="form-control" />
    <br />
    <label for="slaLeftLegPercent">Left Leg SLA Percent</label>
    <input type="text" id="slaLeftLegPercent" value="<%= measurement.slaLeftLegPercent %>" name="slaLeftLegPercent" class="form-control" />
    <br />
    <label for="slaRightLegPercent">Right Leg SLA Percent</label>
    <input type="text" id="slaRightLegPercent" value="<%= measurement.slaRightLegPercent %>" name="slaRightLegPercent" class="form-control" />
    <br />
    <label for="slaTrunkPercent">Trunk SLA Percent</label>
    <input type="text" id="slaTrunkPercent" value="<%= measurement.slaTrunkPercent %>" name="slaTrunkPercent" class="form-control" />
    <br />
    <label for="leanBodyMass">Lean Body Mass</label>
    <input type="text" id="leanBodyMass" value="<%= measurement.leanBodyMass %>" name="leanBodyMass" class="form-control" />
    <br />
    <label for="bodyFatMass">Body Fat Mass</label>
    <input type="text" id="bodyFatMass" value="<%= measurement.bodyFatMass %>" name="bodyFatMass" class="form-control" />
    <br />
    <label for="impedanceLeftArmTwenty">Left Arm 20Hz Impedance</label>
    <input type="text" id="impedanceLeftArmTwenty" value="<%= measurement.impedanceLeftArmTwenty %>" name="impedanceLeftArmTwenty" class="form-control" />
    <br />
    <label for="impedanceRightArmTwenty">Right Arm 20Hz Impedance</label>
    <input type="text" id="impedanceRightArmTwenty" value="<%= measurement.impedanceRightArmTwenty %>" name="impedanceRightArmTwenty" class="form-control" />
    <br />
    <label for="impedanceLeftLegTwenty">Left Leg 20Hz Impedance</label>
    <input type="text" id="impedanceLeftLegTwenty" value="<%= measurement.impedanceLeftLegTwenty %>" name="impedanceLeftLegTwenty" class="form-control" />
    <br />
    <label for="impedanceRightLegTwenty">Right Leg 20Hz Impedance</label>
    <input type="text" id="impedanceRightLegTwenty" value="<%= measurement.impedanceRightLegTwenty %>" name="impedanceRightLegTwenty" class="form-control" />
    <br />
    <label for="impedanceTrunkTwenty">Trunk 20Hz Impedance</label>
    <input type="text" id="impedanceTrunkTwenty" value="<%= measurement.impedanceTrunkTwenty %>" name="impedanceTrunkTwenty" class="form-control" />
    <br />
    <label for="impedanceLeftArmHundred">Left Arm 100Hz Impedance</label>
    <input type="text" id="impedanceLeftArmHundred" value="<%= measurement.impedanceLeftArmHundred %>" name="impedanceLeftArmHundred" class="form-control" />
    <br />
    <label for="impedanceRightArmHundred">Right Arm 100Hz Impedance</label>
    <input type="text" id="impedanceRightArmHundred" value="<%= measurement.impedanceRightArmHundred %>" name="impedanceRightArmHundred" class="form-control" />
    <br />
    <label for="impedanceLeftLegHundred">Left Leg 100Hz Impedance</label>
    <input type="text" id="impedanceLeftLegHundred" value="<%= measurement.impedanceLeftLegHundred %>" name="impedanceLeftLegHundred" class="form-control" />
    <br />
    <label for="impedanceRightLegHundred">Right Leg 100Hz Impedance</label>
    <input type="text" id="impedanceRightLegHundred" value="<%= measurement.impedanceRightLegHundred %>" name="impedanceRightLegHundred" class="form-control" />
    <br />
    <label for="impedanceTrunkHundred">Right Leg 100Hz Impedance</label>
    <input type="text" id="impedanceTrunkHundred" value="<%= measurement.impedanceTrunkHundred %>" name="impedanceTrunkHundred" class="form-control" />
    <br />


happy_begin: {
            type: String,
        },
        happy_done: {
            type: String,
        },
        sad_begin: {
            type: String,
        },
        sad_done: {
            type: String,
        },
        mad_begin: {
            type: String,
        },
        mad_done: {
            type: String,
        },
        scared_begin: {
            type: String,
        },
        scared_done: {
            type: String,
        },
        excited_begin: {
            type: String,
        },
        excited_done: {
            type: String,
        },
        apathy_begin: {
            type: String,
        },
        apathy_done: {
            type: String,
        },
        determined_done: {
            type: String,
        },
        determined_begin: {
            type: String,
        },
        satisfied_done: {
            type: String,
        },
        satisfied_begin: {
            type: String,
        },


          happy_begin: req.body.happy_begin,
  happy_done: req.body.happy_done,
  sad_begin: req.body.sad_begin,
  sad_done: req.body.sad_done,
  mad_begin: req.body.mad_begin,
  mad_done: req.body.mad_done,
  scared_begin: req.body.scared_begin,
  scared_done: req.body.scared_done,
  excited_begin: req.body.excited_begin,
  excited_done: req.body.excited_done,
  apathy_begin: req.body.apathy_begin,
  apathy_done: req.body.apathy_done,
  determined_done: req.body.determined_done,
  determined_begin: req.body.determined_begin,
  satisfied_done: req.body.satisfied_done,
  satisfied_begin: req.body.satisfied_begin,

  <label>How Does This Activity Make You Feel When You Begin?</label>
    <br />
    <input type="checkbox" id="happy_begin" name="happy_begin" value="Happy" /><label for="Happy">Happy</label><br />
    <input type="checkbox" id="sad_begin" name="sad_begin" value="Sad" /><label for="Sad">Sad</label><br />
    <input type="checkbox" id="mad_begin" name="mad_begin" value="Mad" /><label for="Mad">Mad</label><br />
    <input type="checkbox" id="scared_begin" name="scared_begin" value="Scared" /><label
        for="Scared">Scared</label><br />
    <input type="checkbox" id="excited_begin" name="excited_begin" value="Excited" /><label
        for="Excited">Excited</label><br />
    <input type="checkbox" id="apathy_begin" name="apathy_begin" value="Apathy" /><label for="Apathy">Apathy</label><br />
    <input type="checkbox" id="determined_begin" name="determined_begin" value="Determined" /><label for="determined_begin">Determined</label><br />
    <input type="checkbox" id="satisfied_begin" name="satisfied_begin" value="Satisfied" /><label for="satisfied_begin">Satisfied</label>
    <br /><br />
    <label>How Does This Activity Make You Feel When You Are Done?</label>
    <br />
    <input type="checkbox" id="happy_done" name="happy_done" value="Happy" /><label for="Happy">Happy</label><br />
    <input type="checkbox" id="sad_done" name="sad_done" value="Sad" /><label for="Sad">Sad</label><br />
    <input type="checkbox" id="mad_done" name="mad_done" value="Mad" /><label for="Mad">Mad</label><br />
    <input type="checkbox" id="scared_done" name="scared_done" value="Scared" /><label for="Scared">Scared</label><br />
    <input type="checkbox" id="excited_done" name="excited_done" value="Excited" /><label
        for="Excited">Excited</label><br />
    <input type="checkbox" id="apathy_done" name="apathy_done" value="Apathy" /><label for="Apathy">Apathy</label><br />
    <input type="checkbox" id="determined_done" name="determined_done" value="Determined" /><label for="determined_done">Determined</label><br />
    <input type="checkbox" id="satisfied_done" name="satisfied_done" value="Satisfied" /><label for="satisfied_done">Satisfied</label>
    <br/><br/>