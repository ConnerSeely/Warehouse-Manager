const packages = [
    { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', lost: 'false' },
    { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', lost: 'false' },
    { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', lost: 'false' },
    { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', lost: 'false' },
    { heavy: true, priority: true, fragile: true, to: 'Brittany', lost: 'false' },
    { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', lost: 'false' },
    { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', lost: 'false' }]

let lostPackage = null
let allPackages = packages

function drawPackages() {
    let template = ''
    allPackages.forEach(package => {
        template += `
        <div class="col-md-3 rounded shadow my-1 p-1 bg-light" onclick="discover('${package.lost}')">
        <p class="text-center"><b>to: ${package.to}</b></p>
      </div>
      `
    })
    document.getElementById('packages').innerHTML = template
}

function findPackage() {
    let index = Math.floor(Math.random() * allPackages.length)
    //console.log(index)
    allPackages[index].lost = true
    console.log('package missing', allPackages[index])
    lostPackage = allPackages[index]
}

function find(attribute) {
    let sortedPackages = allPackages.filter(p => lostPackage[attribute])
    console.log(sortedPackages)
    allPackages = sortedPackages

    drawPackages()
}

function discover(lost) {
    let found = allPackages.find(p => p.lost == lost)
    console.log(found)
    if (found.lost == lostPackage.lost) {
        toast(`ayy you got it`, 'success')
    } else {
        toast(`wrong one buddy`, 'error')
    }
}

function toast(title, icon) {
    // @ts-ignore
    Swal.fire({
        title: title,
        icon: icon,
        toast: true,
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        position: 'top',
    })
}

findPackage()

drawPackages()
