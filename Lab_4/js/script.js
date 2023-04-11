class Strategy {
    calculate(a){}
}

class SelfPickUp extends Strategy{
    calculate(a){
       console.log(`Ви обрали самовивіз. Сума до сплати ${a}`)
    }
}

class ExternalDeliveryService extends Strategy{
    calculate(a){
       console.log(`Ви обрали зовнішню доставка. Сума до сплати ${a+80}`)
    }
}

class OwnDeliveryService extends Strategy{
    calculate(a){
       console.log(`Ви обрали власну доставку. Сума до сплати ${a+50}`)
    }
}

class DeliveryService{
    my_strategy = ""

    setStrategy(strategy){
        this.my_strategy = strategy
    }

    calculate_delivery(hryvnias){
        this.my_strategy.calculate(hryvnias)
    }
}

let deliveryService = new DeliveryService()

deliveryService.setStrategy(new SelfPickUp());
deliveryService.calculate_delivery(100);

deliveryService.setStrategy(new ExternalDeliveryService());
deliveryService.calculate_delivery(100);

deliveryService.setStrategy(new OwnDeliveryService());
deliveryService.calculate_delivery(100);