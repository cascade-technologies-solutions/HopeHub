
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Calendar, Users, HeartHandshake, Gift, Repeat } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAmountClick = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Thank you for your donation!",
        description: "Your contribution will help us continue our important work.",
      });
    }, 1500);
  };

  const impactItems = [
    { amount: '$25', description: 'Provides school supplies for 5 children' },
    { amount: '$50', description: 'Supplies clean water to a family for a month' },
    { amount: '$100', description: 'Trains a community health worker' },
    { amount: '$250', description: 'Helps build a classroom in a rural school' },
    { amount: '$500', description: 'Funds a medical camp serving 100+ people' },
    { amount: '$1000', description: 'Supports a community development project' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-secondary text-white py-20 relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469571486292-b5175a148ea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
              <p className="text-xl mb-6 opacity-90">
                Your donation helps us continue our mission of creating sustainable change in communities worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Donation Form Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Your Impact</h2>
                <p className="text-gray-600 mb-6">
                  Every donation, no matter the size, makes a meaningful difference in the lives of those we serve. Here's how your contribution can help:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {impactItems.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                      <div className="font-bold text-primary text-xl mr-3">{item.amount}</div>
                      <div className="text-gray-600">{item.description}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex items-start">
                    <HeartHandshake className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Corporate Partnerships</h3>
                      <p className="text-gray-600">
                        Interested in corporate giving or partnership opportunities? Contact our partnership team at <span className="text-primary">partnerships@hopehub.org</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <Gift className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Legacy Giving</h3>
                      <p className="text-gray-600">
                        Learn about including HopeHub in your will or estate planning. Your legacy gift can create lasting change for generations to come.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Donation Information</h2>
                  
                  <Tabs defaultValue="onetime" className="mb-8">
                    <TabsList className="grid grid-cols-2">
                      <TabsTrigger value="onetime" onClick={() => setIsMonthly(false)}>
                        One-time
                      </TabsTrigger>
                      <TabsTrigger value="monthly" onClick={() => setIsMonthly(true)}>
                        <Repeat className="h-4 w-4 mr-2" />
                        Monthly
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="mb-8">
                    <h3 className="font-bold text-lg mb-4">Select Amount</h3>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {['25', '50', '100', '250', '500', '1000'].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-3 px-4 border rounded-md text-center ${
                            donationAmount === amount
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                          }`}
                          onClick={() => handleAmountClick(amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <Input
                        type="number"
                        min="1"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className={donationAmount === 'custom' ? 'border-primary' : ''}
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <h3 className="font-bold text-lg mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <h3 className="font-bold text-lg mb-4">Payment Information</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <Label htmlFor="cardNumber" className="flex items-center">
                          Card Number <CreditCard className="h-4 w-4 ml-2" />
                        </Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate" className="flex items-center">
                            Expiry Date <Calendar className="h-4 w-4 ml-2" />
                          </Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <Label htmlFor="address">Billing Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 mb-6">
                      <Checkbox id="coverFees" />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="coverFees"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Cover transaction fees
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Add 3% to help cover transaction fees so more of your donation goes directly to our programs.
                        </p>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                      {isLoading ? 'Processing...' : isMonthly ? 'Donate Monthly' : 'Complete Donation'}
                    </Button>

                    <p className="text-center text-sm text-gray-500 mt-4">
                      HopeHub is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
