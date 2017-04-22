function solveHanoi(num_disks, source, target){
  if (num_disks === 1){
    console.log(source, target);
  }
  else{
    solveHanoi(num_disks-1, source, 6-source-target);
    console.log(source, target)
    solveHanoi(num_disks-1, 6-source-target, target)
  }
}
solveHanoi(4,1,3);
